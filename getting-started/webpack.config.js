// ----- 웹팩 설정파일 -----

var path = require('path');

module.exports = {
  mode: 'none',
	entry: './src/index.js',  // index.js 에서 import 된 lodash 사용하여 
														// 라이브러리를 요청하느 시간이 줄어들게 됨
  output: { // 웹팩의 entry의 파일을 실행시킴.
    filename: 'main.js',  // index.js의 내용이 들어간다.
		path: path.resolve(__dirname, 'dist')
	}
};