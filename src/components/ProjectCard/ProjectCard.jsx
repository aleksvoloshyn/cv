// import './styles.scss'
import {
  CardSections,
  CardSection,
  CardTitle,
  ProjectCardContainer,
  CardImage,
  CardItalic,
} from './styledProjectCard'
const ProjectCard = ({
  frontTitle,
  backRepo,
  frontContent,
  backSite,
  imageSrc,
  role,
  techStack,
}) => {
  return (
    <ProjectCardContainer>
      <a target="_blank" rel="noreferrer" href={backSite}>
        <CardImage src={imageSrc} alt={imageSrc} width="120" />
      </a>
      <CardSections>
        {' '}
        <CardSection>
          <CardTitle>{frontTitle}: &nbsp; </CardTitle>
          <p> {frontContent}</p>
          {role && <b>Role:</b>} {role}
        </CardSection>
        <CardSection>
          Tech stack: &nbsp;
          <CardItalic>{techStack}</CardItalic>
        </CardSection>
        <CardSection>
          Repository:
          <a target="_blank" rel="noreferrer" href={backRepo}>
            {backRepo}
          </a>
        </CardSection>
        {/* <CardSection>
          Web:
          <a target="_blank" rel="noreferrer" href={backSite}>
            {backSite}
          </a>
        </CardSection> */}
      </CardSections>
    </ProjectCardContainer>
  )
}

export default ProjectCard
