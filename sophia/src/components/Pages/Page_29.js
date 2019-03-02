import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page29 extends Component {
  render() {
    return (
      <div className="Page29">
        <div className="text">Sofia</div>

        <div className="text">Learns</div>

        <div className="text">Research</div>

        <div className="text">
          Glossary of Words Assent: A child's or teenager's agreement to be part
          of a study. Asthma (said like Az-muh): A disease that some people have
          that makes it hard for them to breathe sometimes. We use our lungs to
          breathe. Lungs are in our chest behind our ribs. Inside the lungs are
          tubes. These tubes carry the air in and out of our lungs. When someone
          has asthma, the tubes don't carry the air as well. The lungs get tight
          and make thick, sticky stuff called mucus. Mucus is kind of like snot.
          This makes it hard for the person to breathe and they feel like
          coughing. Check-ups: Regular visits with the doctor to make sure that
          you are feeling okay and growing well. You might also have check-ups
          with a scientist if you are part of a research study. They want to see
          how you are doing and if you want to still be in the study. Clinical
          Trial: A study where researchers compare different treatments or
          medicines to figure out which ones work best. You might need to go see
          the doctor or scientist a little bit more often than normal for
          check-ups during this kind of study. Consent: A person's agreement to
          be part of a study. If you are a kid or a teenager, your parents will
          have to sign a consent form for you to be in a study. Someone should
          explain everything about the study to you before you or your parents
          sign it. Data: The information collected in a study. This can be
          numbers like age and height or words, like about how you feel. It can
          even be the notes scientists take from observations.
        </div>
        <Link to="/page28">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page30">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page29;
