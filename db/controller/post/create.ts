const create = async (editor, title) => {
  try {
    const content = editor.getHTML();
    const body = { title: title, content: content };
    console.log('Body:', body)
    const result = await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    console.log(result)
  } catch (error) {
    console.error(error);
  }
};

export default create;
