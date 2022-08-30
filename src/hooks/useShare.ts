import { useState } from 'react';
import { Share } from 'react-native';

export default () => {
    const [shared, updateShared] = useState<boolean>(false);
    const [activity, updateActivity] = useState<any>(null);
    const [loading, updateLoading] = useState<boolean>(false);
    const [error, updateError] = useState<string>('');

    async function onShare(message: string, url: string) {
        try {
            updateLoading(true);
            const result = await Share.share({
                message: `${message} ${url}`,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    updateActivity(result.activityType);
                }
                updateShared(true);
            } else if (result.action === Share.dismissedAction) {
                updateActivity(null);
                updateShared(false);
            }
        } catch (err) {
            updateError(err);
        } finally {
            updateLoading(false);
        }
    }

    return [onShare, shared, activity, loading, error];
};