import java.math.BigInteger;
import java.nio.charset.StandardCharsets;

public class DigitalSignatureDemo {
    public static void run() {
        String x = "HELLO BOB";
        BigInteger messageNumber = new BigInteger(1, x.getBytes(StandardCharsets.UTF_8));

        RSAKeyPair encryptionKeys = RSAUtil.generateKeyPairForMessage(messageNumber);
        RSAKeyPair bobKeys = RSAUtil.generateKeyPair(128);

        String hashHex = SimplifiedSHA1.hash(x);
        BigInteger hashNumber = new BigInteger(hashHex, 16);

        BigInteger y = RSAUtil.encrypt(messageNumber, encryptionKeys.getE(), encryptionKeys.getN());
        BigInteger signedHash = RSAUtil.decrypt(hashNumber, bobKeys.getD(), bobKeys.getN());

        BigInteger decryptedNumber = RSAUtil.decrypt(y, encryptionKeys.getD(), encryptionKeys.getN());
        String decryptedMessage = new String(decryptedNumber.toByteArray(), StandardCharsets.UTF_8);
        if (decryptedMessage.length() > 0 && decryptedMessage.charAt(0) == 0) {
            decryptedMessage = decryptedMessage.substring(1);
        }

        String zHex = SimplifiedSHA1.hash(decryptedMessage);
        BigInteger z = new BigInteger(zHex, 16);
        BigInteger v = RSAUtil.encrypt(signedHash, bobKeys.getE(), bobKeys.getN());

        System.out.println("Original message x: " + x);
        System.out.println("Encryption public key e: " + encryptionKeys.getE());
        System.out.println("Encryption modulus n: " + encryptionKeys.getN());
        System.out.println("Bob public key e: " + bobKeys.getE());
        System.out.println("Bob modulus n: " + bobKeys.getN());
        System.out.println("H(x): " + hashHex);
        System.out.println("Alice sends encrypted message y = ek(x): " + y);
        System.out.println("Alice sends signature signPrivateBob(H(x)): " + signedHash);
        System.out.println("Bob decrypts x = dk(y): " + decryptedMessage);
        System.out.println("Bob calculates z = H(x): " + zHex);
        System.out.println("Bob verifies v = verifyPublicBob(signature): " + v.toString(16).toUpperCase());

        if (z.equals(v)) {
            System.out.println("Final result: OK");
        } else {
            System.out.println("Final result: FAILED");
        }
    }
}
