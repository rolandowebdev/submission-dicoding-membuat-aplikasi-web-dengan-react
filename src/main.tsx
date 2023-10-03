import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@/index.pcss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App.tsx'
import { Footer, Navbar, RootContainer } from '@/components'
import { NotesProvider } from '@/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RootContainer>
			<NotesProvider>
				<Navbar />
				<App />
				<Footer />
			</NotesProvider>
		</RootContainer>
	</React.StrictMode>
)
