<template>
  <Content>
    <div class="row">
      <div class="col-3">
        <userProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <userProfileWrite @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <userProfilePosts  :posts="posts" />
      </div>
    </div>
  </Content>
</template>


<script>
import Content from "@/components/Content";
import userProfileInfo from "@/components/userProfileInfo";
import userProfilePosts from "@/components/userProfilePosts";
import userProfileWrite from "../components/userProfileWrite";
import {reactive} from "vue";
export default {
  name: "UserProfile",
  components:{
    Content,
    userProfileInfo,
    userProfilePosts,
    userProfileWrite,
  },
  setup(){
    // eslint-disable-next-line no-unused-vars
    const user=reactive({
      id:1,
      username:"wupengfei",
      lastname:"wu",
      firstname:"pengfei",
      followerCount:0,
      if_followed:false,
    });

    const posts=reactive({
      counts:3,
      posts:[
        {
          id:1,
          userId:1,
          content:"今天我是沈敏爸爸"
        }, {
          id:2,
          userId:1,
          content:"今天我是沈敏父亲"
        },
        {
          id:3,
          userId:1,
          content:"今天我是沈敏爹"
        },

      ]

    })

    const follow=()=>{
        if(user.if_followed)return;
        user.if_followed=true;
        user.followerCount++;
    };
    const unfollow=()=>{
      if(!user.if_followed)return;
      user.if_followed=false;
      user.followerCount--;
    };

    const post_a_post=(content)=>{
      posts.counts++;
      posts.posts.unshift( {
        id:posts.counts,
        userId:1,
        content:content,
      })
    }
    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    }
  }

}
</script>

<style scoped>

</style>