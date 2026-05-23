import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class Main {
    private static final String BIG_MESSAGE_TEXT =
        "15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018518518350617283945";

    public static void main(String[] args) {
        runTask1a();
        runTask1b();
        runTask2();
        runTask3();
        runTask4();
        runTask5();
    }

    private static void runTask1a() {
        System.out.println("=== Task 1a: RSA Small Example ===");

        int n = 253;
        int e = 31;
        int m = 10;
        int c = (int) RSAUtil.modPow(m, e, n);
        int[] factors = RSAUtil.factor(n);
        int p = factors[0];
        int q = factors[1];
        int phi = (p - 1) * (q - 1);
        int d = RSAUtil.modInverse(e, phi);
        int decrypted = (int) RSAUtil.modPow(35, d, n);

        System.out.println("Given n = " + n);
        System.out.println("Given e = " + e);
        System.out.println("Given m = " + m);
        System.out.println("Encryption: c = m^e mod n = " + m + "^" + e + " mod " + n + " = " + c);
        System.out.println("Factor n: " + n + " = " + p + " * " + q);
        System.out.println("p = " + p);
        System.out.println("q = " + q);
        System.out.println("phi = (p - 1)(q - 1) = " + phi);
        System.out.println("d = e^-1 mod phi = " + d);
        System.out.println("Decrypt c = 35: m = 35^" + d + " mod " + n + " = " + decrypted);
        System.out.println();
    }

    private static void runTask1b() {
        System.out.println("=== Task 1b: RSA Text Encryption ===");

        int p = 67;
        int q = 73;
        int e = 89;
        String plaintext = "SIGURI";
        int n = p * q;
        int phi = (p - 1) * (q - 1);
        int d = RSAUtil.modInverse(e, phi);

        List<String> plaintextBlocks = RSAUtil.splitIntoBlocks(plaintext, 2);
        List<Integer> numericBlocks = new ArrayList<>();
        List<Integer> encryptedBlocks = new ArrayList<>();
        List<Integer> decryptedBlocks = new ArrayList<>();

        for (String block : plaintextBlocks) {
            int number = RSAUtil.twoCharacterBlockToNumber(block);
            int encrypted = (int) RSAUtil.modPow(number, e, n);
            int decrypted = (int) RSAUtil.modPow(encrypted, d, n);
            numericBlocks.add(number);
            encryptedBlocks.add(encrypted);
            decryptedBlocks.add(decrypted);
        }

        System.out.println("p = " + p);
        System.out.println("q = " + q);
        System.out.println("e = " + e);
        System.out.println("n = " + n);
        System.out.println("phi = " + phi);
        System.out.println("d = " + d);
        System.out.println("Plaintext blocks: " + plaintextBlocks);
        System.out.println("Numeric blocks: " + numericBlocks);
        System.out.println("Encrypted blocks: " + encryptedBlocks);
        System.out.println("Decrypted numeric blocks: " + decryptedBlocks);

        boolean allBlocksFit = true;
        for (int number : numericBlocks) {
            if (number >= n) {
                allBlocksFit = false;
            }
        }

        if (allBlocksFit) {
            System.out.println("Decrypted text: " + RSAUtil.numbersToText(decryptedBlocks));
        } else {
            System.out.println("Decrypted text: cannot be recovered with these RSA values because some numeric blocks are greater than n.");
            System.out.println("Reversible block conversion check: " + RSAUtil.numbersToText(numericBlocks));
        }
        System.out.println();
    }

    private static void runTask2() {
        System.out.println("=== Task 2: BigInteger RSA Key Generation ===");

        BigInteger message = new BigInteger(BIG_MESSAGE_TEXT);
        RSAKeyPair keyPair = RSAUtil.generateKeyPairForMessage(message);
        BigInteger encrypted = RSAUtil.encrypt(message, keyPair.getE(), keyPair.getN());
        BigInteger decrypted = RSAUtil.decrypt(encrypted, keyPair.getD(), keyPair.getN());

        System.out.println("Bit length of p: " + keyPair.getP().bitLength());
        System.out.println("Bit length of q: " + keyPair.getQ().bitLength());
        System.out.println("Bit length of n: " + keyPair.getN().bitLength());
        System.out.println("n is larger than the message: " + (keyPair.getN().compareTo(message) > 0));
        System.out.println("Original message: " + message);
        System.out.println("Encrypted message: " + encrypted);
        System.out.println("Decrypted message: " + decrypted);
        System.out.println("Original equals decrypted: " + message.equals(decrypted));
        System.out.println();
    }

    private static void runTask3() {
        System.out.println("=== Task 3: Simplified SHA-1 ===");

        String message = "DATA";
        String hash = SimplifiedSHA1.hash(message);
        SimplifiedSHA1.CollisionResult collision = SimplifiedSHA1.findCollision("DATA", 300000);
        SimplifiedSHA1.SearchResult targetSearch = SimplifiedSHA1.findMessageWithHash("4BAFE69C", 300000);

        System.out.println("M = " + message);
        System.out.println("H(M) = " + hash);
        System.out.println("Padded M in hex = " + SimplifiedSHA1.bytesToHex(SimplifiedSHA1.padMessage(message.getBytes(StandardCharsets.UTF_8))));

        if (collision != null) {
            System.out.println("Collision search:");
            System.out.println("M = " + collision.getFirstMessage());
            System.out.println("M' = " + collision.getSecondMessage());
            System.out.println("H(M) = " + collision.getFirstHash());
            System.out.println("H(M') = " + collision.getSecondHash());
        } else {
            System.out.println("No collision found in selected search range.");
        }

        if (targetSearch != null) {
            System.out.println("Target hash search:");
            System.out.println("M' = " + targetSearch.getMessage());
            System.out.println("H(M') = " + targetSearch.getHash());
        } else {
            System.out.println("No collision found in selected search range.");
        }
        System.out.println();
    }

    private static void runTask4() {
        System.out.println("=== Task 4: HMAC Simplified SHA-1 ===");

        String key = "secret";
        String message = "Message for HMAC";
        String hmac = HMACSimplifiedSHA1.hmac(key, message);

        System.out.println("Key: " + key);
        System.out.println("Message: " + message);
        System.out.println("HMAC result: " + hmac);
        System.out.println();
    }

    private static void runTask5() {
        System.out.println("=== Task 5: Digital Signature with RSA and Simplified SHA-1 ===");
        DigitalSignatureDemo.run();
        System.out.println();
    }
}
