
<script>
    import GraficoRadar from "$lib/GraficoRadar/GraficoRadar.svelte";
  </script>
  
  <style>
    .bottom-right-div {
      position: fixed;
      right: 20px;
      bottom: 20px;
      width: 225px;
      height: 270px;
      background-color: #ffffff;
      color: #ffffff00;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  
  <div class="bottom-right-div">
    <GraficoRadar/>
  </div>
  