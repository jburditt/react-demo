'use client'

import { Model } from "survey-core";
import { Survey } from 'survey-react-ui';
import { PlainDark } from 'survey-core/themes';
import 'survey-core/survey-core.css';

export default async function Page({ params }: any) {

const surveyJson = {
      elements: [{
        name: "firstName",
        title: "First Name:",
        type: "text"
      }, {
        name: "lastName",
        title: "Last Name:",
        type: "text"
      }, {
        name: "username",
        title: "Username:",
        type: "text"
      }, {
        name: "email",
        title: "Email:",
        type: "text"
      }]
    };

    let survey = new Model(surveyJson);
    survey.applyTheme(PlainDark);
    survey.completeText = "Add User";
    survey.completedHtml = "User added successfully!";
    // if (this.id()) {
    //   this.safe(this.userService.apiUserIdGet({ id: this.id()! })).subscribe((user) => {
    //     console.log(user);
    //     survey.data = user;
    //   });
    // }
    // TODO handle edit instead of always adding new user
    survey.onComplete.add((sender, options) => {
      console.log("Survey results: " + survey.data);
      // this.safe(this.userService.apiUserPost({ body: survey.data })).subscribe((user) => {
      //   console.log("User created", user);
      // });
    });
    //this.surveyModel = survey;
  //}

  return (
    <>
      <h1>Form</h1>
      <p>An example of automatically generating a form using SurveyJS from a database model.</p>
      <Survey model={survey} />
    </>
  );
}
