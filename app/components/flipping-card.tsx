import FlippingCard  from '~/components/FlippingCard';



export default function FlippingCardRoute() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
      <div>
        <h2>Click to Flip</h2>
        <FlippingCard
          frontContent={<h3>Front (Click)</h3>}
          backContent={<p>Back (Click)</p>}
          flipTrigger="click"
        />
      </div>
      <div>
        <h2>Hover to Flip</h2>
        <FlippingCard
          frontContent={<h3>Front (Hover)</h3>}
          backContent={<p>Back (Hover)</p>}
          flipTrigger="hover"
        />
      </div>
    </div>
  );
}

