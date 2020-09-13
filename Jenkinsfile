pipeline {
  agent any



  environment {

        EMAIL_BODY =

        """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

            <p>

            View console output at

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p>

            <p><i>(Build log is attached.)</i></p>

        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'"

        EMAIL_RECEPIENT = 'oppspetedev@gmail.com'

    }


  tools{
      nodejs "node"
  }

  stages {

    stage('clone repository') {
      steps {
        git 'https://github.com/popiyo/gallery.git'
      }

    }

    stage('Download Dependancies [for Testing Purposes]') {
        steps {
                  sh 'npm install body-parser --save'
            	    sh 'npm audit fix'
            	    sh 'npm install ejs --save'
            	    sh 'npm install express --save'
            	    sh 'npm install mongoose --save'
            	    sh 'npm install multer --save'
            	    sh 'npm install uuid --save'
                  sh 'npm install chai --save'
                  sh 'npm audit fix --force'
                  sh 'npm install chai-http --save'
                  sh 'npm install mocha --save'
              }
    }


    stage('Unit Tests') {
          steps {
                  sh 'npm test'

                  }
        }

    stage('Deploy to Heroku') {
          steps {
                    withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/galleryip.git master'
                        }
                    }
            }


}


 post {
        success {
            emailext attachLog: true,
                body: EMAIL_BODY,
                subject: EMAIL_SUBJECT_SUCCESS,
                to: EMAIL_RECEPIENT

                slackSend color:'#BADA55', message:'Gallary App Deploy Success \nBuild: ${BUILD_ID} \nLink: https://galleryip.herokuapp.com'

        }

        failure {
            emailext attachLog: true,
                body: EMAIL_BODY,

                subject: EMAIL_SUBJECT_FAILURE,

                to: EMAIL_RECEPIENT
        }
    }



}
