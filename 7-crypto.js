const crypto = require('crypto');

// 암호화 가장 간단한 방법
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));


// 실제 개발에서 사용되는 암호 (이유: rainbow table - http://wiki.hash.kr/index.php/%EB%A0%88%EC%9D%B8%EB%B3%B4%EC%9A%B0_%ED%85%8C%EC%9D%B4%EB%B8%94)
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
      console.log('password:', key.toString('base64'));
    });
  });