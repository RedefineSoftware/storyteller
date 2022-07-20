import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <section><h3>Storyteller</h3></section>
      </nav>
      <div className="spacer"></div>
      <section className="heading"><h1>Call to Adventure</h1></section>
      <section className="input">
        <aside>
          <p>You want to <strong>grab the reader's attention</strong>. What is important to them? Usually a great hook has multiple lines and offers a tantalizing statement to draw the audience in.</p>
        </aside>

        <textarea rows={4} placeholder="Did you know 7 out of 10 visitors to our landing page bounce? Every day, that's 10,000 people."></textarea>
      </section>

      <section className="heading"><h1>Refusal of the Call</h1></section>
      <section className="input">
        <aside>
          <p>This is where you <strong>describe the problem in detail</strong>. You hit them with what the issue is. It can be short or long, depending on the hook. Set the context by using comparisons on the scale you hope to achieve.</p>
        </aside>

        <textarea rows={4} placeholder="The problem is there are too many fields to fill out in the signup form."></textarea>
      </section>

      <section className="heading"><h1>Crossing the Threshold</h1></section>
      <section className="input">
        <aside>
          <p>This is where you propose the solution. You provide light at the end of the tunnel.</p>
        </aside>

        <textarea rows={4} placeholder="But what if we could reduce the number of fields from 12 to 4? Our user interviews showed many users did not like long forms."></textarea>
      </section>

      <section className="heading"><h1>Tests, Allies, Enemies</h1></section>
      <section className="input">
        <aside>
          <p>Everything has a tradeoff. This is where you explain you understand it. Acknowledge the other point of view. Every great story has a villain.</p>
        </aside>

        <textarea rows={4} placeholder="Of course, if we do this work, it would tradeoff with new branding. That’s important for our image."></textarea>
      </section>

      <section className="heading"><h1>Reward</h1></section>
      <section className="input">
        <aside>
          <p>Then you hit them with the "but". And you layer the cherry on top for your suggestion. Bring on the drama. Remind everyone how annoying the current state is.</p>
        </aside>

        <textarea rows={4} placeholder="But we estimate this experiment could recover 2,000 users per day. And we could build this experiment in just 2 sprints."></textarea>
      </section>

      <section className="heading"><h1>The Road Back</h1></section>
      <section className="input">
        <aside>
          <p>End with the big ask. You want this work to start at the expense of other work. As PMs, we constantly have to make the case for certain work. This is how to do it. Position your solution as an elixir.</p>
        </aside>

        <textarea rows={4} placeholder="Therefore, I think we should prioritize the experiment over branding next sprint."></textarea>
      </section>

      <section className="acknowledgements">
        <p>Based on tweets by <a href="https://twitter.com/aakashg0/status/1549352161187954688">Akaash Gupta</a> and <a href="https://twitter.com/nathanbaugh27/status/1522911673098682368">Nathan Baugh</a>. Built by <a href="https://crabl.net">crabl</a>.</p>
      </section>
    </div>
  );
}

export default App;
