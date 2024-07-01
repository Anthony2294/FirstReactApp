import './App.css'
import './index.css'
import './AppBanner'
import AppBanner from './AppBanner'
import AddToDo from './AddToDo'




function App() {

  return (

    <div>

      <AppBanner/>
      <br></br>
      <br></br>

      <section /*Dark Blue Background*/>

        <div className='ListBackgroundWhite'>
          <AddToDo/>
        </div>
        
          
      </section>


    </div>



  )
}



export default App;
