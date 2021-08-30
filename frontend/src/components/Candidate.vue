<template>
  <div>
    <form>
      <div class="container">
        <h1>Candidate Info</h1>
        <p>Please fill in this form to apply for a job.</p>
        <!-- <label for="email"><b>Upload your Resume</b></label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        /> -->
        <hr />
        <label><b>Name</b></label>
        <div>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            id="name"
            required
            v-model="form.name"
          ></b-form-input>
        </div>
        <label><b>Email</b></label>
        <div>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            required
            v-model="form.email"
          ></b-form-input>
        </div>
        <br />
        <label><b>Contact</b></label>
        <div>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            type="number"
            placeholder="Enter Contact Number"
            name="contact"
            id="contact"
            required
          >
          </b-form-input>
        </div>
        <label><b>Date of birth</b></label>
        <div>
          <b-form-input
            type="date"
            placeholder="Enter date of birth"
            name="dob"
            id="dob"
            required
          >
          </b-form-input>
        </div>
        <label><b>Address</b></label>
        <div>
          <b-form-input
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Enter your address"
            name="address"
            id="address"
            required
          >
          </b-form-input>
        </div>
        <label><b>Experience</b></label>
        <div>
          <b-form-input
            type="number"
            placeholder="Enter Your Experience"
            name="experience"
            id="experience"
          >
          </b-form-input>
        </div>
        <label><b>Skills</b></label>
        <div>
          <textarea
            type="textarea"
            placeholder="Enter Your Skills"
            name="skills"
            id="skills"
            v-model="form.skills"
          >
          </textarea>
        </div>

        <label><b>Education</b></label>
        <div>
          <b-form-input
            type="text"
            placeholder="Enter Education Details"
            name="education"
            id="education"
          >
          </b-form-input>
        </div>
        <div class="mt-3">
          <b-button
            pill
            variant="primary"
            type="submit"
            class="submitbtn text-right mt-3"
            >Button</b-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Candidate",
  data() {
    return {
      form: {},
    };
  },
  async mounted() {
    let results = await axios.get("http://127.0.0.1:8008/parser");
    console.log("parser", results);
    this.form = results.data.parts;
  },
};
</script>
