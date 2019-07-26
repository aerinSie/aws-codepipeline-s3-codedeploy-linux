# aws-codepipeline-s3-aws-codedeploy_linux
Use this sample when creating a simple pipeline in AWS CodePipeline while following the Simple Pipeline Walkthrough tutorial. http://docs.aws.amazon.com/codepipeline/latest/userguide/getting-started-w.html

1. git fork codepipeline 的範例檔
- https://github.com/awslabs/aws-codepipeline-s3-aws-codedeploy_linux
2. 建立一個 Elastic Beanstalk 環境
- 會拿到一個 url位置
3. 去 codepipeline 將 你fork後的分支 連到 Elastic Beanstalk
4. 異動github 的code, 就會自動部署, url 的內容就會跟著改
- https://aws.amazon.com/tw/getting-started/tutorials/continuous-deployment-pipeline/#aws-element-modal-b326493e-9834-4139-bd8d-44ed63a2bb33

