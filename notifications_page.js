function initNotifications_page() {
    const notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = ""; // Clear existing content

    // Assuming a default user for mock data
    const userId = "user1"; 
    const userNotifications = getMockUserNotifications(userId);

    if (userNotifications.length === 0) {
        notificationList.innerHTML = "<p style=\"text-align: center;\">Você não tem novas notificações.</p>";
        return;
    }

    userNotifications.forEach(notification => {
        const notificationItem = `
            <li class="notification-item ${notification.read ? '' : 'unread'}">
                <div class="notification-icon">${notification.type === 'comment' ? '💬' : '❤️'}</div>
                <div class="notification-content">
                    <div class="notification-message">${notification.message}</div>
                    <div class="notification-time">${new Date(notification.date).toLocaleString()}</div>
                </div>
            </li>
        `;
        notificationList.insertAdjacentHTML("beforeend", notificationItem);
    });
}

// Initial call for notifications page
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash.includes("notifications_page")) {
        initNotifications_page();
    }
});

