import { ref } from 'vue'
import { archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

export function setupMenu() {
  const selectedIndex = ref(0);

  const appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      iosIcon: mailOutline,
      mdIcon: mailSharp
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      iosIcon: trashOutline,
      mdIcon: trashSharp
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      iosIcon: warningOutline,
      mdIcon: warningSharp
    }
  ];
  const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  const path = window.location.pathname.split('folder/')[1];
  if (path !== undefined) {
    selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
  }

  return {
    selectedIndex,
    appPages,
    labels
  }
}