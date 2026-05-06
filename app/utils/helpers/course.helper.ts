export const calculateDiscount = (
  originalPrice?: number,
  offerPrice?: number
): number => {
  if (!originalPrice || !offerPrice) return 0;

  return Math.round(
    ((originalPrice - offerPrice) / originalPrice) * 100
  );
};

export const getYouLearnData = (courseDetails: any) => {
  return (
    courseDetails?.courseIntendedLearnerInfo
      ?.filter((item: any) => item.type === 'learn')
      .map((item: any) => ({
        text: item.name,
      })) || []
  );
};