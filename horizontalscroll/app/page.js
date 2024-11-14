import s from './page.module.scss'
import Container from '@/src/components/container/Container';

export default function Home() {
  let style = {backgroundColor : "var(--c-primary)"}
  return (
    <div>
      <Container scroll={"vertical"} style={style}>
        <div className={`${s.box} box`}><p>One</p></div>
        <div className={`${s.box} box`}><p>Two</p></div>
        <div className={`${s.box} box`}><p>Three</p></div>
        <div className={`${s.box} box`}><p>Four</p></div>
        <div className={`${s.box} box`}><p>Five</p></div>
      </Container>
    </div>
  
  );
}
