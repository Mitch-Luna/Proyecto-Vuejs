<template>
    <div class="contendorHeader">
        <img src="../assets/logoPatel.png" alt="" class="logo">
            <ul>
                <li> <router-link to="/" class="nav-link">Home | </router-link></li>
                <li> <router-link to="/SobreNosotros" class="nav-link">About |</router-link></li>
                <li> <router-link to="/contact" class="nav-link">Contact |</router-link></li>
                <li> <router-link to="/blog" class="nav-link">Blog</router-link></li>
            </ul>
    </div>
    
</template>
<script>


</script>

<style>
.contendorHeader {
    width: 100%;
    height: 60px;
    background-color: #d0abab;
    color: rgb(229, 192, 192);
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    top: 0; 
    left: 0; 
    position: fixed;
    box-sizing: border-box; 
    z-index: 1000;
    padding: 0 20px; 
    font-size: 20px;;
}
.logo {
    width: 50px;
    height: 50px;
    margin-right: 20px;
}
ul {
    list-style: none;
    display: flex;
    gap: 20px;
}
.nav-link {
    text-decoration: none; 
    color: white; 
    font-size: inherit; 
}


</style>