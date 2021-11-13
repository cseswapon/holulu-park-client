import React, { useEffect } from "react";
import help from "../../image/Helpful sign-pana.864dfd03.png";
import "./Help.css";
const Help = () => {
  useEffect(() => {
    document.title = "Holulu Theme Park-Help";
  }, []);
  return (
    <div className="helpful-section my-5 container">
      <div className="help-img">
        <img className="img-fluid" src={help} alt="helpfool imeage" />
      </div>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Experience your customers’ problems
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Imagine how your customers are feeling when they arrive on your
                Help Center.Maybe they’re confused about how a feature works,
                frustrated that they can’t figure out a particular problem or
                hungry to learn, for example.Your content should help customers
                get what they need.So keep your advice to the point, accessible,
                empowering and friendly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Be clear on your article’s objective
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Before you start writing, define how your article will help your
                customers. This will help you stay on topic and only include
                advice that’s genuinely useful. For example, if you want to help
                your customers get set up with your product, only include tips
                that provide value right away - like how to install and
                customize your app.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingthree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsethree"
                aria-expanded="false"
                aria-controls="collapsethree"
              >
                Write what you know
              </button>
            </h2>
            <div
              id="collapsethree"
              className="accordion-collapse collapse"
              aria-labelledby="headingthree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Share the tips you follow yourself every day. For example, if
                you have a project management app, write about how you plan your
                own projects. To do this right, you need to stay up to date with
                how your features work - so stay tuned in to your product's
                updates.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Focus on your customers’ goals, not your features
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Your customers are more familiar with the goal they’re trying
                  to achieve, than the terminology of your product. Your help
                  content should address the jobs your customers want to do, not
                  the features they’re trying to use.
                </p>
                <p>
                  Opening your article with the job it helps customers do, will
                  entice them to read on. For example, ‘Work together to reach
                  your project goal on time’ is far more appealing than ‘Here’s
                  how to use ExampleApp’s team feature.’ Leading with the job in
                  your title, description and sub-headings will let people
                  quickly see if your article can help them achieve what they
                  need.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Use your customers’ words
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Know the words your customers use to ask for help with your
                product, whether it's on Google or in your Help Center. With
                Articles you can see what terms customers searched for most but
                didn’t find. Work those phrases into your:
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Make your article easy to scan
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Keep each paragraph short and to the point so you don’t
                overwhelm your customers with too much information. Their
                attention will be naturally drawn to your article description
                and subheadings - so use these to call out your most important
                points. Adding bullet-points, dividers, tables, screenshots and
                plenty of whitespace makes it easy for customers to quickly scan
                your article and find what they need.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Monitor performance and iterate
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Rather than making each article perfect before you publish it,
                go ahead and get it out there. Then learn from your customers'
                reactions to it and the conversations it sparks. Armed with that
                feedback, you can keep iterating and improving your content to
                make it more useful for customers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
