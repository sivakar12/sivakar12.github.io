import data from '../../data/index';

export default function Contact() {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.smallBio}</p>
    </div>
  );
}