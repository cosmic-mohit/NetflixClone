import './App.css'
// import Header from './components/Header'
import Hero from './components/Hero'
import MovieList from './components/TrendingNow'


function App() {

  return (
    <>
      <main>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
          <Hero />
          <MovieList />
        </div>
      </main>
    </>
  )
}

export default App
