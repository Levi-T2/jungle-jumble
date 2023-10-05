
export const JungleView = `  
<div class="container-fluid bg-img">
<section class="row">
  <div class="col-4 boxes shadow">
    <p class='fs-1 text-center'>Jungle Jumble</p>
  </div>
</section>
<section class="row">
  <div class="col-6">
    <section class="row justify-content-center">
      <div class="col-12 boxes shadow">
        <p>Jumble Placeholder</p>
        <div id='currentJumble'></div>
      </div>
      <div class="col-12 boxes shadow">
        <p>Our text will go here</p>
        <form onsubmit = "app.GamesController.checkText()">
    <div>
      <label for="textInput" class="form-label"></label>
      <textarea name="textInput" rows="5" placeholder="Type Here...." id="inputText"></textarea>
      <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
    </div>
  </form>
      </div>
    </section>
  </div>
  <div class="col-5  boxes shadow">
    <p class='text-center fs-4'>Jumbles!</p>
    <div class="p-3">
    <form onsubmit="app.JungleController.createJumble(event)">
    <div class="p-2">
      <label for="name">Name</label>
      <input id="name" type="text" required name="name">
    </div>
    <div class="p-2">
      <label for="bodyInput">Body</label>
      <textarea name="body" id="body" rows="5"></textarea>
    </div>
    <div>
      <button class="btn btn-success rounded-pill" type="submit">Submit</button>
    </div>
  </form>
    </div>
    <div class='p-2' id='ourJumbles'><div>
    </div>
    </section>

</div>`