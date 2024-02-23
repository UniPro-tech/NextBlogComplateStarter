import Footer from './footer'
import Meta from './meta'
import Comment from './giscus'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Comment />
      <Footer />
    </>
  )
}

export default Layout
