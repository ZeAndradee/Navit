<script>
    import SideBarMenuProntuario from "$lib/SideBarMenu/SideBarMenuProntuario.svelte";
    import SearchCase from "$lib/SearchCase/SearchCase.svelte";
</script>

<header>
    <SearchCase/>
</header>

<div class="sidebar">
    <SideBarMenuProntuario />
</div>

<slot>
<div class="container">

</div>
</slot>
<style>
.container{
    background-color: aqua;
}
</style>
    