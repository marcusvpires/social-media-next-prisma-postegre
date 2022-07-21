const updateProfileImage = async (src: string, email: string) => {
  const body = { src, email }
  await fetch(`/api/user/image`, {
    method: 'PUT',
    body: JSON.stringify(body)
  });
};

export default updateProfileImage;
