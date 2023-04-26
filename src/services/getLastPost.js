import axios from 'axios';
import PostModel from '../models/PostModel.js';

const getLastPost = async () => {
  try {
    const result = await axios.get('https://www.pelando.com.br/api/graphql?query=query+RecentOffersQuery($limit:Int$after:String$filters:OfferFilterOptions){public{recentOffers(limit:$limit,after:$after,filters:$filters){...FeedFragment}}}fragment+FeedFragment+on+OfferConnection{edges{...DealFeedFragment}pageInfo{...PageInfoFragment}}fragment+DealFeedFragment+on+Offer{id+commentCount+couponCode+discountFixed+discountPercentage+freeShipping+image{...DealImageFragment}isLocal+kind+price+sourceUrl+status+temperature+title+isTracked+timestamps{...DealTimestampsFragment}category{id+slug+title}store{id+slug+name+url+image{...DealImageFragment}}user{id+image{id+url(width:64,height:64)}nickname+isVerified}}fragment+DealImageFragment+on+Media{id+small:url(height:122)medium:url(height:238)large:url(height:406)extraLarge:url(width:1200)original:url}fragment+DealTimestampsFragment+on+OfferTimestamps{firstApprovedAt+approvedAt+createdAt+pickedAt+lastCommentedAt}fragment+PageInfoFragment+on+PageInfo{startCursor+endCursor+hasNextPage+hasPreviousPage}&variables={"limit":1}', {
      headers: {
        "User-Agent": "Custom user agent",
        "Content-Type": "application/ld+json",
        withCredentials: true
      }
    })
      .then(function (response) {
        const postList = response.data.data.public.recentOffers.edges;
        for (const post of postList) {
          const postModel = new PostModel(post);
          console.log(postModel);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  } catch (error) {
    console.error(error);
  }
}

export default getLastPost;