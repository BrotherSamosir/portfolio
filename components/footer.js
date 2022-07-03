import footerCss from '../styles/components/footer.module.css'


export default function Layout({ children }) {
    return (
      <footer className={footerCss.footer}>
        <span className={footerCss.footer_title}>&copy; 2022 Alders Antonius Samosir</span>
      </footer>
    )
  }