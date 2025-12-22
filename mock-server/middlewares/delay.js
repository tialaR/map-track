export default function delay(ms = 300) {
  return (_req, _res, next) => {
    setTimeout(next, ms);
  };
}
