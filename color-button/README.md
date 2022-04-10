10
    各タグのRoleの検索方法
    https://www.w3.org/TR/wai-aria/#role_definitions
    例えば、divとかはroleないので、role=???みたいに役割を明記してやると良い。
    buttonとかaは、roleを指定しなくても、builtinで既にroleが決まってる。
    accesibilityのために、roleはしっかり入れておくほうが良い。そうすると、SCREEN READERとしても使える。

12
    matcherの種類一覧
    https://github.com/testing-library/jest-dom


23
    functionをテストしてみる。

    正規表現 \B と g
        https://www.javadrive.jp/start/regex/index9.html
        https://www.tohoho-web.com/ex/regexp.html
    グルーピングのカッコ ()

29
    npm install
        eslint-plugin-jest-dom
        eslint-plugin-testing-library

    package.jsonの以下を削除
        "eslintConfig": {
            "extends": [
            "react-app",
            "react-app/jest"
            ]
        },

    .eslintrc.jsonという名前のファイルを追加して、以下を記載。
        {
            "plugins": [
                "testing-library",
                "jest-dom"
            ],
            "extends": [
                "react-app",
                "react-app/jest",
                "plugin:testing-library/react",
                "plugin:jest-dom/recommended"        
            ]
        }

30
    .vscodeフォルダを作成して、その中のsetting.jsonファイルを作る。
    そして次を追加。
        {
            "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true
            }
        }

    