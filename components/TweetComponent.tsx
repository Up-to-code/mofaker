import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, I18nManager } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CText from './ui/Text';

// Tweet data type definition
interface Tweet {
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

const TweetComponent: React.FC<Tweet> = ({
  userName,
  handle,
  time,
  text,
  replies,
  retweets,
  likes,
  profileImage,
  postImage, // Destructure postImage
}) => {
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.headerText}>
          <CText variant='bold' Cstyle={styles.userName}>{userName}</CText>
          <CText variant='medium' Cstyle={styles.handle}> 
            {handle} • {time}
          </CText>
        </View>
      </View>

      <CText  variant='medium' Cstyle={styles.tweetText}>{text}</CText>

      {postImage && ( // Conditionally render the image
        <Image source={{ uri: postImage }} style={styles.postImage} />
      )}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="comment-o" size={16} color="gray" />
          <Text style={styles.iconText}>{replies}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="retweet" size={16} color="gray" />
          <Text style={styles.iconText}>{retweets}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart-o" size={16} color="gray" />
          <Text style={styles.iconText}>{likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="share" size={16} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
  },
  header: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',  // Adjust for RTL
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    marginLeft: I18nManager.isRTL ? 0 : 10,  // Adjust for RTL
    marginRight: I18nManager.isRTL ? 10 : 0,  // Adjust for RTL
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: I18nManager.isRTL ? 'right' : 'left',  // Adjust for RTL
  },
  handle: {
    color: 'gray',
    fontSize: 14,
    textAlign: I18nManager.isRTL ? 'right' : 'left',  // Adjust for RTL
  },
  tweetText: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    textAlign: I18nManager.isRTL ? 'right' : 'left',  // Adjust for RTL
  },
  postImage: {
    width: '100%', // Full width of the tweet container
    height: 200,   // Set a height for the image
    borderRadius: 10,
    marginTop: 10, // Space between the text and image
  },
  footer: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',  // Adjust for RTL
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: I18nManager.isRTL ? 0 : 5,  // Adjust for RTL
    marginRight: I18nManager.isRTL ? 5 : 0,  // Adjust for RTL
    color: 'gray',
  },
});

export default TweetComponent;
