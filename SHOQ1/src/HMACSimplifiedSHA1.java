import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class HMACSimplifiedSHA1 {
    private static final int BLOCK_LENGTH = 4;
    private static final int IPAD = 0x36;
    private static final int OPAD = 0x5C;

    public static String hmac(String key, String message) {
        byte[] normalizedKey = normalizeKey(key.getBytes(StandardCharsets.UTF_8));
        byte[] innerKeyPad = new byte[BLOCK_LENGTH];
        byte[] outerKeyPad = new byte[BLOCK_LENGTH];

        for (int i = 0; i < BLOCK_LENGTH; i++) {
            innerKeyPad[i] = (byte) ((normalizedKey[i] & 0xFF) ^ IPAD);
            outerKeyPad[i] = (byte) ((normalizedKey[i] & 0xFF) ^ OPAD);
        }

        byte[] messageBytes = message.getBytes(StandardCharsets.UTF_8);
        byte[] innerHash = SimplifiedSHA1.hashBytes(join(innerKeyPad, messageBytes));
        byte[] hmacBytes = SimplifiedSHA1.hashBytes(join(outerKeyPad, innerHash));

        return SimplifiedSHA1.bytesToHex(hmacBytes);
    }

    public static byte[] normalizeKey(byte[] key) {
        byte[] result;

        if (key.length > BLOCK_LENGTH) {
            result = SimplifiedSHA1.hashBytes(key);
        } else {
            result = Arrays.copyOf(key, BLOCK_LENGTH);
        }

        return Arrays.copyOf(result, BLOCK_LENGTH);
    }

    private static byte[] join(byte[] first, byte[] second) {
        byte[] result = Arrays.copyOf(first, first.length + second.length);
        System.arraycopy(second, 0, result, first.length, second.length);
        return result;
    }
}
