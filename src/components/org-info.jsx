import React from "react"
import PropTypes from "prop-types"

import "./org-info.css"

import { OutboundLink } from "gatsby-plugin-google-gtag"
import {
  Divider,
  Button,
  Header,
  Icon,
  Popup,
  Message,
} from "semantic-ui-react"

const OrgInfo = ({ data }) => {
  const years = Object.keys(data.years)
    .map(year => {
      return (
        <OutboundLink
          href={data.years[year].projects_url}
          rel="noreferrer"
          target="_blank"
        >
          <span className="org-info-year">{year}</span>
        </OutboundLink>
      )
    })
    .reverse()

  let technologies = data.technologies.map(tech => {
    return <span className="org-info-technology">{tech}</span>
  })

  let topics = data.topics.map(topic => {
    return <span className="org-info-topic">{topic}</span>
  })

  const isParticipatingIn2025 = "2025" in data.years

  return (
    <div className="org-info-container">
      <div
        className="org-info-logo-container"
        style={{
          backgroundColor: data.image_background_color,
        }}
      >
        <div
          className="org-info-logo"
          style={{
            backgroundImage: `url(${data.image_url})`,
          }}
        ></div>
      </div>
      {!!data.guide_url && (
        <Message color="orange" style={{ margin: "1%" }}>
          <Message.Header>
            View the official{" "}
            <OutboundLink
              href={data.guide_url}
              rel="noreferrer"
              target="_blank"
            >
              <u>contribution guidelines</u>
            </OutboundLink>{" "}
            for {data.name}
          </Message.Header>
        </Message>
      )}
      {/* {isParticipatingIn2025 && (
        <Message color="orange" style={{ margin: "1%" }}>
          <Message.Header>
            {data.name} is participating in{" "}
            <OutboundLink
              href={data.years["2025"].projects_url}
              rel="noreferrer"
              target="_blank"
            >
              <u>GSoC 2025</u>
            </OutboundLink>
            . View the{" "}
            <OutboundLink
              href={data.ideas_url}
              rel="noreferrer"
              target="_blank"
            >
              <u>ideas list</u>
            </OutboundLink>{" "}
            {!!data.guide_url && (
              <>
                and the{" "}
                <OutboundLink
                  href={data.guide_url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <u>contribution guide</u>
                </OutboundLink>{" "}
              </>
            )}
            for this organization.
          </Message.Header>
        </Message>
      )} */}
      <div className="org-info-site-container">
        <OutboundLink href={data.url} rel="noreferrer" target="_blank">
          <Button icon labelPosition="left" color="orange">
            <Icon name="world" />
            Visit Site
          </Button>
        </OutboundLink>
      </div>
      <div className="org-info-site-container">
        {data.twitter_url && (
          <OutboundLink
            href={data.twitter_url}
            rel="noreferrer"
            target="_blank"
          >
            <Popup
              content="Twitter"
              trigger={
                <Button icon>
                  <Icon name="twitter" />
                </Button>
              }
            />
          </OutboundLink>
        )}
        {data.mailing_list && (
          <OutboundLink
            href={data.mailing_list}
            rel="noreferrer"
            target="_blank"
          >
            <Popup
              content="Mailing List"
              trigger={
                <Button icon color>
                  <Icon name="envelope outline" />
                </Button>
              }
            />
          </OutboundLink>
        )}
        {data.irc_channel && (
          <OutboundLink
            href={data.irc_channel}
            rel="noreferrer"
            target="_blank"
          >
            <Popup
              content="Communication Channel"
              trigger={
                <Button icon>
                  <Icon name="comment" />
                </Button>
              }
            />
          </OutboundLink>
        )}
        {data.contact_email && (
          <OutboundLink
            href={data.contact_email}
            rel="noreferrer"
            target="_blank"
          >
            <Popup
              content="Contact Email"
              trigger={
                <Button icon>
                  <Icon name="mail" />
                </Button>
              }
            />
          </OutboundLink>
        )}
        {data.blog_url && (
          <OutboundLink href={data.blog_url} rel="noreferrer" target="_blank">
            <Popup
              content="Blog"
              trigger={
                <Button icon>
                  <Icon name="blogger" />
                </Button>
              }
            />
          </OutboundLink>
        )}
      </div>
      <div className="org-info-description-container">{data.description}</div>
      <center>
        <Divider horizontal className="org-info-divider">
          <Header as="h4">Category</Header>
        </Divider>
      </center>
      <div className="org-info-category-container">
        <span>{data.category}</span>
      </div>
      <center>
        <Divider horizontal className="org-info-divider">
          <Header as="h4">Years</Header>
        </Divider>
      </center>
      <div className="org-info-years-container">{years}</div>
      <center>
        <Divider horizontal className="org-info-divider">
          <Header as="h4">Technologies</Header>
        </Divider>
      </center>
      <div className="org-info-technologies-container">{technologies}</div>
      <center>
        <Divider horizontal className="org-info-divider">
          <Header as="h4">Topics</Header>
        </Divider>
      </center>
      <div className="org-info-topics-container">{topics}</div>
    </div>
  )
}

OrgInfo.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OrgInfo
