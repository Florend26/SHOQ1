# Projekti II - Cryptography / Data Security

This is a plain Java university project for basic cryptography and data security topics. It demonstrates RSA calculations, RSA text encryption, BigInteger RSA key generation, a simplified SHA-1 hash, HMAC, and a digital signature example.

The project does not use Maven, Gradle, packages, or external libraries.

## Project Structure

```text
src/
  Main.java
  RSAUtil.java
  RSAKeyPair.java
  SimplifiedSHA1.java
  HMACSimplifiedSHA1.java
  DigitalSignatureDemo.java

README.md
```

## How To Compile

```bash
javac -d out src/*.java
```

## How To Run

```bash
java -cp out Main
```

## Class Explanation

`Main.java` runs all tasks one by one and prints the required section titles.

`RSAUtil.java` contains helper methods for RSA, including modular exponentiation, modular inverse, factoring small `n`, text block conversion, and BigInteger RSA key generation.

`RSAKeyPair.java` stores RSA key values: `p`, `q`, `n`, `phi`, `e`, and `d`.

`SimplifiedSHA1.java` implements the required educational SHA-1-like hash. It uses four 8-bit registers, 32-bit message blocks, word expansion, 16 rounds, padding, and uppercase hexadecimal output.

`HMACSimplifiedSHA1.java` implements HMAC using the simplified SHA-1 hash and a block length of 4 bytes.

`DigitalSignatureDemo.java` demonstrates encrypting a message with RSA, signing the simplified hash with Bob's private RSA key, and verifying the signature with Bob's public RSA key.

## Topic Explanation

RSA is an asymmetric encryption method. It uses two large primes `p` and `q`, computes `n = p * q`, and uses a public exponent `e` and private exponent `d`. A message is encrypted with `c = m^e mod n` and decrypted with `m = c^d mod n`.

Simplified SHA-1 in this project is not the real SHA-1 algorithm. It is a small educational hash function with four 8-bit registers. It processes data in 32-bit blocks and returns a 32-bit hash in hexadecimal form.

HMAC combines a secret key with a hash function. This helps prove that a message came from someone who knows the secret key and that the message was not changed.

A digital signature signs a hash of a message with a private key. The receiver verifies it with the public key. If the verified hash equals the newly calculated hash, the signature is valid.

## Example Output

The large RSA values change on each run because random probable primes are generated.

```text
=== Task 1a: RSA Small Example ===
p = 11
q = 23
phi = (p - 1)(q - 1) = 220
d = e^-1 mod phi = 71

=== Task 1b: RSA Text Encryption ===
n = 4891
phi = 4752
d = 3257
Plaintext blocks: [SI, GU, RI]
Numeric blocks: [21321, 18261, 21065]
Encrypted blocks: [...]

=== Task 2: BigInteger RSA Key Generation ===
Bit length of p: 1024
Bit length of q: 1024
Bit length of n: 2048
Original equals decrypted: true

=== Task 3: Simplified SHA-1 ===
M = DATA
H(M) = ...

=== Task 4: HMAC Simplified SHA-1 ===
HMAC result: ...

=== Task 5: Digital Signature with RSA and Simplified SHA-1 ===
Final result: OK
```

Note for Task 1b: the required two-character ASCII conversion creates numbers larger than `n = 4891`. Standard RSA can only decrypt a block correctly when the block number is smaller than `n`, so the program prints this limitation clearly.
