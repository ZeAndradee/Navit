<script>
    import FormLogin from "$lib/Login/FormLogin.svelte";
</script>

<div class="row"> 
    <div>
        <svg width="730" height="900" viewBox="0 0 730 900" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="-6" width="736" height="900" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_17_263" transform="matrix(0.00109568 0 0 0.000896026 -0.621981 0)"/>
            </pattern>
            </svg>
            
    </div>
    <div>  
        <FormLogin />
    </div>
</div>

<style>
    .row{

        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        }
</style>