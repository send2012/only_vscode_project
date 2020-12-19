<template>
    <div>
        <input type="text" v-model="loginForm.username" placeholder="user name"  />
        <input type="text" v-model="loginForm.password" placeholder="password" />

        <button @click="login">login</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        name: 'login',

        data ()
        {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
            };
        },

        methods: {
            ...mapMutations( [ 'changeLogin' ] ),

            login ()
            {
                let _this = this;

                if ( this.loginForm.username === '' || this.loginForm.password === '' )
                    alert(  'account or password can not empty' );
                else
                {
                    this.axios( {
                        method: 'post',
                        url: '/user/login',
                        data: _this.loginForm
                    } ).then( res => {
                        console.log( res.data );

                        _this.userToken = 'Bearer ' + res.data.data.body.token;

                        // 将用户 token 保存到 vuex 中
                        _this.changeLogin( {
                            Authorization: _this.userToken,
                        } );

                        _this.$router.push( '/' );

                        alert( 'login success' );
                    } ).catch( error => {
                        alert( 'account or password error' );

                        console.log( error );
                    } );
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
    
</style>
