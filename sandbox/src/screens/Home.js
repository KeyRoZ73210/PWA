import Button from '../components/Button';
function Home(props) {

  function onButtonPressed() {
    console.log("button was pressed")
  }
  const myButtonName = "Mon autre bouton";
  return (
    <div>
      <h2>Home</h2>
      
      <br/>
      <Button name="Mon bouton trop cool" className="btn-primary" onClick={onButtonPressed} yelling />

      <br/>
      <Button name={myButtonName} className="btn-secondary" link="https://wearemerci.com"/>
    </div>
  )
}

export default Home;