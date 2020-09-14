## Spring Boot + React JS シンプル従業員管理システム  
単純な CRUD のみの従業員管理システム（バリデーション、確認ダイアログなどを含まない）。

バックエンド： Spring Boot REST API サーバ
データベース： MySQL 8.0
フロントエンド： React JS

### 利用手順
リポジトリのトップディレクトリで DB コンテナを起動する
```console
docker-compose up -d
```

※Docker 環境が手元にない場合は、以下を参照して用意してからコンテナを起動する

Docker Toolbox（レガシー Windows 向けです）：  
https://github.com/fs5013-furi-sutao/explain.how_to_install.docker_toolbox

エラーなく DB が起動できたら、バックエンドサーバに移動する。
```console
cd ./springboot-backend
```

#### バックエンドサーバを起動
```console
gradle bootRun
```

Gradle をインストールしていない場合は、
```console
./gradlew bootRun
```

エラーなくサーバを起動できたら、フロントエンドサーバに移動する。
```console
cd ./react-frontend
```

#### フロントエンドサーバ

##### Node モジュールをインストール
```console
yarn install
```

##### フロントサーバを起動
```console
yarn start
```

##### ブラウザで確認
```
http://localhost:3000
```

ホーム画面・従業員一覧画面  
http://localhost:3000  
http://localhost:3000/employees
![従業員一覧画面](./screen_capture/employees_list.png)

従業員追加画面  
http://localhost:3000/create-add-employee/_add
![従業員一覧画面](./screen_capture/add_employee.png)

従業員更新画面  
http://localhost:3000/create-add-employee/:id
![従業員更新画面](./screen_capture/update_employee.png)

従業員詳細画面  
http://localhost:3000/view-employee/:id
![従業員更新画面](./screen_capture/employee_detail.png)
