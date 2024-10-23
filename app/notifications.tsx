import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

// Define the type for a notification
interface Notification {
    id: string;
    message: string;
}

// Sample data for notifications
const notificationsData: Notification[] = [
    { id: '1', message: 'You have a new message from John.' },
    { id: '2', message: 'Your order has been shipped!' },
    { id: '3', message: 'Reminder: Meeting at 3 PM tomorrow.' },
    { id: '4', message: 'New comment on your post.' },
];

const Notifications: React.FC = () => {
    // Render each notification item
    const renderNotification = ({ item }: { item: Notification }) => (
        <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notificationsData}
                renderItem={renderNotification}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    notificationItem: {
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    notificationText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Notifications;
