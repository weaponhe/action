<template>
  <div>
    <app-bar :fixed="true">
      <tooltip  slot="left" content="left tooltip" direction="bottom"><icon name="account"></icon></tooltip>
      <tooltip  slot="right"><icon name="add"></icon></tooltip>
    </app-bar>
    <div class="test">
      <div class="test-button">
        <tooltip direction="top" theme="dark" content="top tooltip">
          <tooltip direction="bottom" theme="light" content="bottom tooltip">
            <tooltip direction="left" theme="light" content="left tooltip">
              <tooltip direction="right" theme="light" content="right tooltip">
                <div class="cube"></div>
              </tooltip>
            </tooltip>
          </tooltip>
        </tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

  .test{
    height: 1000px;
    text-align: center;
  }
  .test-button{
    padding-top: 200px;
  }
  .cube{
    width:100px;
    height: 100px;
    background-color: green;
  }
</style>
