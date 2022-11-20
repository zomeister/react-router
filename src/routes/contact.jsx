import { Fragment } from "react";
import { Form } from "react-router-dom";


const Avatar = () => {
  const ava
  return (
    <div>
    </div>
  );
}

const ContactForm = () => {
  const contact_form = {
    EditForm: <Form action="edit"><button type="submit">Edit</button></Form>
  }

  const delete_message = "Please confirm you want to delete this record.",

  function handleOnSubmit(e) {
    
    if ( !confirm(delete_message) ) {
      e.preventDefaultDefault(); }
    }

  return (
    <Fragment>
      {contact_form.EditForm}
      <Form method="post" action="destroy" onSubmit={
        event => {handleOnSubmit(event)}}>
          <button type="submit">Delete</button>
      </Form>

    </Fragment>

  );
}

/**
 * ContactProps: first, last, avatar, twitter, notes, favorite
 */
export default function Contact() {
  const contact = {
    first: "Your", last: "Name", avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle", notes: "some notes", favorite: true,
  };

  return (
    <Fragment id="contact">
      <Avatar />
      <ContactForm />{/** ReactRouterDOM.Form element */}
    </Fragment>
  )
}