import axios from 'axios';

class PostModel {
  constructor(post) {
    this.id = post.id;
    this.couponCode = post.couponCode;
    this.discountFixed = post.discountFixed;
    this.discountPercentage = post.discountPercentage;
    this.freeShipping = post.freeShipping;
    this.companyImageId = post.image.id;
    this.isLocal = post.isLocal;
    this.kind = post.kind;
    this.price = post.price;
    this.sourceUrl = post.sourceUrl;
    this.status = post.status;
    this.title = post.title;
    this.isTracked = post.isTracked;
    this.createdAt = new Date(post.timestamps.createdAt).getTime();
    this.category = post.category;
    this.store = post.store;
    this.store.image = post.store.image.id;
  }

  async sendRecentPosts(chatId) {
    try {
      const result = await axios.get('https://www.pelando.com.br', {
      })
        .then(function (response) {
        })
        .catch(function (error) {
        })
        .finally(function () {
        });
    } catch (error) {
      console.error(error);
    }
  }
}

export default PostModel;