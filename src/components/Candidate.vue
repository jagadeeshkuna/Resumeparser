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
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          required
        />
        <label><b>Email</b></label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          id="email"
          required
        />

        <label><b>Contact</b></label>
        <input
          type="number"
          placeholder="Enter Contact Number"
          name="contact"
          id="contact"
          required
        />
        <label><b>Date of birth</b></label>
        <input
          type="date"
          placeholder="Enter date of birth"
          name="dob"
          id="dob"
        />
        <label><b>Address</b></label>
        <textarea
          placeholder="Enter your address"
          name="address"
          id="address"
        />
        <label><b>Experience</b></label>
        <input
          type="number"
          placeholder="Enter Your Experience"
          name="experience"
          id="experience"
        />
        <label><b>Skills</b></label>
        <textarea
          type="text"
          placeholder="Enter Your Skills"
          name="skills"
          id="skills"
        />
        <label><b>Education</b></label>
        <textarea
          type="text"
          placeholder="Enter Education Details"
          name="education"
          id="education"
        />

        <button type="submit" class="submitbtn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Candidate",
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input,
textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
}

/* Set a style for the submit/register button */
.submitbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
