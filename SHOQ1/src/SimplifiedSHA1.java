import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class SimplifiedSHA1 {
    private static final int INITIAL_H0 = 0x45;
    private static final int INITIAL_H1 = 0xAF;
    private static final int INITIAL_H2 = 0xAC;
    private static final int INITIAL_H3 = 0xFE;

    public static String hash(String message) {
        return hash(message.getBytes(StandardCharsets.UTF_8));
    }

    public static String hash(byte[] message) {
        return bytesToHex(hashBytes(message));
    }

    public static byte[] hashBytes(byte[] message) {
        int h0 = INITIAL_H0;
        int h1 = INITIAL_H1;
        int h2 = INITIAL_H2;
        int h3 = INITIAL_H3;
        byte[] paddedMessage = padMessage(message);

        for (int blockStart = 0; blockStart < paddedMessage.length; blockStart += 4) {
            int[] w = createWords(paddedMessage, blockStart);

            int a = h0;
            int b = h1;
            int c = h2;
            int d = h3;

            for (int j = 0; j < 16; j++) {
                int k;
                int f;

                if (j <= 3) {
                    k = 0x5A;
                    f = b & c;
                } else if (j <= 7) {
                    k = 0xE7;
                    f = b ^ c;
                } else if (j <= 11) {
                    k = 0x8C;
                    f = b | c;
                } else {
                    k = 0xBD;
                    f = b ^ c;
                }

                int temp = (d + f + leftRotate8(a, 3) + w[j] + k) % 256;
                d = c;
                c = leftRotate8(b, 7);
                b = a;
                a = temp;
            }

            h0 = (h0 + a) % 256;
            h1 = (h1 + b) % 256;
            h2 = (h2 + c) % 256;
            h3 = (h3 + d) % 256;
        }

        return new byte[] {
            (byte) h0,
            (byte) h1,
            (byte) h2,
            (byte) h3
        };
    }

    public static byte[] padMessage(byte[] message) {
        int originalLengthBits = message.length * 8;
        int totalLengthBits = originalLengthBits + 1 + 16;

        while (totalLengthBits % 32 != 0) {
            totalLengthBits++;
        }

        byte[] padded = new byte[totalLengthBits / 8];
        System.arraycopy(message, 0, padded, 0, message.length);

        // Padding is written at bit level because the length field is only 16 bits.
        setBit(padded, originalLengthBits, 1);

        int lengthStart = totalLengthBits - 16;
        int storedLength = originalLengthBits & 0xFFFF;
        for (int i = 0; i < 16; i++) {
            int bit = (storedLength >> (15 - i)) & 1;
            setBit(padded, lengthStart + i, bit);
        }

        return padded;
    }

    public static int leftRotate8(int value, int bits) {
        int cleanValue = value & 0xFF;
        int cleanBits = bits % 8;
        if (cleanBits == 0) {
            return cleanValue;
        }
        return ((cleanValue << cleanBits) | (cleanValue >>> (8 - cleanBits))) & 0xFF;
    }

    public static CollisionResult findCollision(String message, int maxAttempts) {
        String firstHash = hash(message);

        for (int i = 0; i < maxAttempts; i++) {
            String candidate = "C" + i;
            String candidateHash = hash(candidate);
            if (!candidate.equals(message) && candidateHash.equals(firstHash)) {
                return new CollisionResult(message, candidate, firstHash, candidateHash);
            }
        }

        Map<String, String> seenHashes = new HashMap<>();
        for (int i = 0; i < maxAttempts; i++) {
            String candidate = "M" + i;
            String candidateHash = hash(candidate);
            String previous = seenHashes.get(candidateHash);
            if (previous != null && !previous.equals(candidate)) {
                return new CollisionResult(previous, candidate, candidateHash, candidateHash);
            }
            seenHashes.put(candidateHash, candidate);
        }

        return null;
    }

    public static SearchResult findMessageWithHash(String targetHash, int maxAttempts) {
        for (int i = 0; i < maxAttempts; i++) {
            String candidate = "T" + i;
            String candidateHash = hash(candidate);
            if (candidateHash.equalsIgnoreCase(targetHash)) {
                return new SearchResult(candidate, candidateHash);
            }
        }
        return null;
    }

    public static String bytesToHex(byte[] data) {
        StringBuilder result = new StringBuilder();

        for (byte value : data) {
            result.append(String.format("%02X", value & 0xFF));
        }

        return result.toString();
    }

    private static int[] createWords(byte[] paddedMessage, int blockStart) {
        int[] w = new int[16];

        for (int i = 0; i < 4; i++) {
            w[i] = paddedMessage[blockStart + i] & 0xFF;
        }

        for (int j = 4; j <= 15; j++) {
            w[j] = leftRotate8((w[j - 4] + w[j - 2]) % 256, 1);
        }

        return w;
    }

    private static void setBit(byte[] data, int bitIndex, int bitValue) {
        if (bitValue == 1) {
            data[bitIndex / 8] = (byte) (data[bitIndex / 8] | (0x80 >> (bitIndex % 8)));
        }
    }

    public static class CollisionResult {
        private final String firstMessage;
        private final String secondMessage;
        private final String firstHash;
        private final String secondHash;

        public CollisionResult(String firstMessage, String secondMessage, String firstHash, String secondHash) {
            this.firstMessage = firstMessage;
            this.secondMessage = secondMessage;
            this.firstHash = firstHash;
            this.secondHash = secondHash;
        }

        public String getFirstMessage() {
            return firstMessage;
        }

        public String getSecondMessage() {
            return secondMessage;
        }

        public String getFirstHash() {
            return firstHash;
        }

        public String getSecondHash() {
            return secondHash;
        }
    }

    public static class SearchResult {
        private final String message;
        private final String hash;

        public SearchResult(String message, String hash) {
            this.message = message;
            this.hash = hash;
        }

        public String getMessage() {
            return message;
        }

        public String getHash() {
            return hash;
        }
    }
}
