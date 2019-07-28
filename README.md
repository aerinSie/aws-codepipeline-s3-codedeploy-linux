Hi I am Aerin, I am a web developer.
Here is the website link: www.yoyomore.net
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](http://www.yoyomore.net)
使用技術
##### AWS Elastic Beanstalk: 
- 建立一個自動化實體, 它會自己創建ec2, 若那個ec2啟動異常時，會再自己創一個新的ec2實體，保持服務的運作。
- 預設的Elastic Beanstalk是用t2.marco實體，可以在設定檔那邊改成最便宜的t3.nano實體。
##### AWS Router 53: 
- 使用自己的domain網域，將ipv4位置連到 上述創立的Elastic Beanstalk即可讓主頁 連到Elastic Beanstalk裡的index.html。
---
# steps:
##### step 1. git fork codepipeline 的範例檔
- https://github.com/awslabs/aws-codepipeline-s3-aws-codedeploy_linux
##### step2. 建立一個 Elastic Beanstalk 環境
- 會拿到一個 url位置
##### step3. 去 codepipeline 連結 Elastic Beanstalk 及 你fork後的分支
##### step4. 異動github 的code, 就會自動部署, url 的內容就會跟著改
- 預設index.html為入口畫面
- [aws resource](https://aws.amazon.com/tw/getting-started/tutorials/continuous-deployment-pipeline/#aws-element-modal-b326493e-9834-4139-bd8d-44ed63a2bb33)

