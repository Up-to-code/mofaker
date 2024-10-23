// screens/TweetListScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import TweetComponent from '@/components/TweetComponent'; // Import TweetComponent

// Tweet data type definition
interface Tweet {
  id: string;
  userName: string;
  handle: string;
  time: string;
  text: string;
  replies: number;
  retweets: number;
  likes: number;
  profileImage: string;
  postImage?: string; // Optional post image
}

// Sample tweet data
const tweets: Tweet[] = [
  {
    id: '1',
    userName: 'Tabitha Potter',
    handle: '@mis_potter',
    time: '14h',
    text:
      "Kobe’s passing is really sticking w/ me in a way I didn’t expect. He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident.",
    replies: 7,
    retweets: 1,
    likes: 11,
    postImage : "https://i.pinimg.com/enabled_lo/564x/df/6b/df/df6bdf92d8221c474cf7a6d94860caff.jpg",
    profileImage: 'https://i.pinimg.com/enabled_lo/564x/6b/95/87/6b95877c03e5b365ebe2e6644afa834e.jpg', // Replace with actual image
  },
  {
    id: '2',
    userName: 'Ahmed Mansour',
    handle: '@ahmed_mansour',
    time: '12h',
    text:
      'أعتقد أن الذكاء الاصطناعي سيغير مستقبل البرمجة تمامًا. نحن في بداية حقبة جديدة من التكنولوجيا!',
    replies: 4,
    retweets: 8,
    likes: 20,
    postImage : "https://i.pinimg.com/enabled_lo/564x/16/df/a6/16dfa6fad9775372918b9b4916518e42.jpg",
    profileImage: 'https://i.pinimg.com/280x280_RS/fd/31/57/fd3157c6680ab73afc16a843825860bf.jpg', // Replace with actual image
  },
  {
    id: '3',
    userName: 'John Doe',
    handle: '@john_doe',
    time: '2h',
    text:
      'Just finished a 10k run. Feeling great and ready to tackle the day! 🏃‍♂️💪 #FitnessGoals',
    replies: 2,
    retweets: 5,
    likes: 15,
    profileImage: 'https://placekitten.com/102/102', // Replace with actual image
  },
  {
    id: '4',
    userName: 'Fatima Khalid',
    handle: '@fatima_k',
    time: '10m',
    text:
      'القهوة الصباحية هي أفضل طريقة لبدء اليوم! ☕️ هل توافقون؟ #قهوة #صباح_الخير',
    replies: 3,
    retweets: 2,
    likes: 18,
    profileImage: 'https://placekitten.com/103/103', // Replace with actual image
  },
  {
    id: '5',
    userName: 'Emily Thompson',
    handle: '@emily_t',
    time: '6h',
    text:
      'Reading through the latest on climate change. We need more action and less talk. 🌍 #ClimateActionNow',
    replies: 12,
    retweets: 9,
    likes: 25,
    profileImage: 'https://placekitten.com/104/104', // Replace with actual image
  },
  {
    id: '6',
    userName: 'Mohammed Ali',
    handle: '@mohammed_a',
    time: '1d',
    text:
      'لقد كانت تجربة مدهشة أن أكون جزءًا من هذا المشروع الضخم! أشعر بالفخر للعمل مع هذا الفريق الرائع. #مشروع_الحلم',
    replies: 6,
    retweets: 10,
    likes: 32,
    profileImage: 'https://placekitten.com/105/105', // Replace with actual image
  },
  {
    id: '7',
    userName: 'Sophia Lee',
    handle: '@sophia_lee',
    time: '3d',
    text:
      'Just launched my new blog! Super excited to share my thoughts on travel and lifestyle. Check it out! ✈️🌍 #TravelBlogger',
    replies: 10,
    retweets: 15,
    likes: 50,
    profileImage: 'https://placekitten.com/106/106', // Replace with actual image
  },
  {
    id: '8',
    userName: 'Youssef Hassan',
    handle: '@youssef_hassan',
    time: '5d',
    text:
      'العائلة هي أهم شيء في الحياة. اجعلوا كل لحظة معهم مليئة بالحب والسعادة. ❤️ #عائلة #حب',
    replies: 8,
    retweets: 7,
    likes: 40,
    profileImage: 'https://placekitten.com/107/107', // Replace with actual image
  },
  {
    id: '9',
    userName: 'Jake Paul',
    handle: '@jake_paul',
    time: '20m',
    text:
      'Big things coming soon... Stay tuned! 🚀 #Excited',
    replies: 6,
    retweets: 12,
    likes: 35,
    profileImage: 'https://placekitten.com/108/108', // Replace with actual image
  },
  {
    id: '10',
    userName: 'Lina Adel',
    handle: '@lina_adel',
    time: '1h',
    text:
      'أشعر بالحماس للتحدي الجديد الذي سيبدأ الأسبوع القادم! 💪 #نجاح #تحدي_ذاتي',
    replies: 9,
    retweets: 5,
    likes: 28,
    profileImage: 'https://placekitten.com/109/109', // Replace with actual image
  },
];


const TweetListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlashList
        data={tweets}
        renderItem={({ item }) => (
          <TweetComponent
            userName={item.userName}
            handle={item.handle}
            time={item.time}
            text={item.text}
            replies={item.replies}
            retweets={item.retweets}
            likes={item.likes}
            profileImage={item.profileImage}
            postImage={item.postImage}
          />
        )}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200} // Estimate size of each item for optimization
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TweetListScreen;
