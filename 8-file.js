// 현재 js 파일 / 디렉토리
console.log(__dirname, __filename)

const fs = require('fs');
const path = require('path');

// 비동기로 실행된다
fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8', (err, data) => {
    // 이 함수가 실행되는 시점은 파일 전체를 읽고 나서이다
    if (err) {
        throw err;
    }

    console.log(data);
});

console.log('누가 먼저 실행될까?');

let postContent = 'Node를 통해 쓴 첫번째 파일입니다\n';

// CALLBACK HELL
fs.writeFile(path.join(__dirname, 'files', 'post.txt'), postContent, (err) => {
    // 이 함수가 실행되는 시점은 파일 전체를 읽고 나서이다
    if (err) {
        throw err;
    }

    console.log('글 작성 성공');

    fs.appendFile(path.join(__dirname, 'files', 'post.txt'), '답변을 잘 읽었습니다. 감사합니다', (err) => {
        // 이 함수가 실행되는 시점은 파일 전체를 읽고 나서이다
        if (err) {
            throw err;
        }

        console.log('답변 작성 성공');

        fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), '도움이 되었다니 다행입니다 :-)', (err) => {
            // 이 함수가 실행되는 시점은 파일 전체를 읽고 나서이다
            if (err) {
                throw err;
            }
        
            console.log('답변 작성 성공');
        });
    });
});

// await / async

async function writePost () {
    try {
        const data = await fs.promises.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf8');
        console.log('-------------------------------------- 비동기 구문 시작 ------------------------------------------')
        console.log(data);
        await fs.promises.writeFile(path.join(__dirname, 'files', 'post.txt'), postContent);
        await fs.promises.writeFile(path.join(__dirname, 'files', 'post.txt'), '답변을 잘 읽었습니다. 감사합니다');
        await fs.promises.writeFile(path.join(__dirname, 'files', 'reply.txt'), '도움이 되었다니 다행입니다 :-)');
    } catch (err) {
        console.log(err);
    }
}

writePost();

// 동기로 써야하는 함수
if (fs.existsSync(path.join(__dirname, 'files', 'will-deleted.txt'))) {
    fs.unlink(path.join(__dirname, 'files', 'will-deleted.txt'), (err) => {
        if (err) {
            throw err;
        }
        console.log('File Removed');
    });
}

if (!fs.existsSync(path.join(__dirname, 'new'))) {
    fs.mkdir(path.join(__dirname, 'new'), (err) => {
        if (err) {
            throw err;
        }
        console.log('Directory Created');
    });
}