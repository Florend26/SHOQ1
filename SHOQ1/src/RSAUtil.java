import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;

public class RSAUtil {
    private static final SecureRandom RANDOM = new SecureRandom();
    private static final BigInteger PUBLIC_EXPONENT = BigInteger.valueOf(65537);

    public static long modPow(long base, long exponent, long modulus) {
        long result = 1;
        long value = base % modulus;

        while (exponent > 0) {
            if (exponent % 2 == 1) {
                result = (result * value) % modulus;
            }
            value = (value * value) % modulus;
            exponent = exponent / 2;
        }

        return result;
    }

    public static int modInverse(int number, int modulus) {
        int oldR = number;
        int r = modulus;
        int oldS = 1;
        int s = 0;

        while (r != 0) {
            int quotient = oldR / r;

            int nextR = oldR - quotient * r;
            oldR = r;
            r = nextR;

            int nextS = oldS - quotient * s;
            oldS = s;
            s = nextS;
        }

        int result = oldS % modulus;
        if (result < 0) {
            result += modulus;
        }
        return result;
    }

    public static int[] factor(int n) {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return new int[] { i, n / i };
            }
        }
        return new int[] { n, 1 };
    }

    public static List<String> splitIntoBlocks(String text, int blockSize) {
        List<String> blocks = new ArrayList<>();

        for (int i = 0; i < text.length(); i += blockSize) {
            int end = Math.min(i + blockSize, text.length());
            String block = text.substring(i, end);
            if (block.length() < blockSize) {
                block = block + " ";
            }
            blocks.add(block);
        }

        return blocks;
    }

    public static int twoCharacterBlockToNumber(String block) {
        char first = block.charAt(0);
        char second = block.charAt(1);
        return first * 256 + second;
    }

    public static String numbersToText(List<Integer> numbers) {
        StringBuilder text = new StringBuilder();

        for (int number : numbers) {
            char first = (char) ((number / 256) & 0xFF);
            char second = (char) (number & 0xFF);
            text.append(first);
            text.append(second);
        }

        return text.toString();
    }

    public static RSAKeyPair generateKeyPairForMessage(BigInteger message) {
        int primeBitLength = Math.max(1024, (message.bitLength() / 2) + 64);
        RSAKeyPair keyPair;

        do {
            keyPair = generateKeyPair(primeBitLength);
        } while (keyPair.getN().compareTo(message) <= 0);

        return keyPair;
    }

    public static RSAKeyPair generateKeyPair(int primeBitLength) {
        BigInteger p;
        BigInteger q;
        BigInteger phi;

        do {
            p = BigInteger.probablePrime(primeBitLength, RANDOM);
            q = BigInteger.probablePrime(primeBitLength, RANDOM);
            phi = p.subtract(BigInteger.ONE).multiply(q.subtract(BigInteger.ONE));
        } while (p.equals(q) || !PUBLIC_EXPONENT.gcd(phi).equals(BigInteger.ONE));

        BigInteger d = PUBLIC_EXPONENT.modInverse(phi);
        return new RSAKeyPair(p, q, PUBLIC_EXPONENT, d);
    }

    public static BigInteger encrypt(BigInteger message, BigInteger e, BigInteger n) {
        return message.modPow(e, n);
    }

    public static BigInteger decrypt(BigInteger encrypted, BigInteger d, BigInteger n) {
        return encrypted.modPow(d, n);
    }
}
