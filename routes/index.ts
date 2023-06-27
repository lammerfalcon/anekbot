export default eventHandler(async () => {
  return {
    statusCode: 200,
    body: 'Анекдоты успешно отправляются в Discord.',
  };
})
