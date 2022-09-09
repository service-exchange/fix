FROM serviceexchange/telecms-prod:latest

# Install Postgres
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ buster-pgdg main" | tee /etc/apt/sources.list.d/pgdg.list
RUN apt update && apt -y install postgresql-13 postgresql-client-13
USER postgres
RUN service postgresql start && \
    psql -c "create role telecms with login superuser password 'postgres';"
USER root

# ENV defaults
ENV TELECMS_HOST=http://localhost:3000 \
    LOCKBOX_MASTER_KEY=replace_with_lockbox_master_key \
    SECRET_KEY_BASE=replace_with_secret_key_base \
    PG_DB=telecms_production \
    PG_USER=telecms \
    PG_PASS=postgres \
    PG_HOST=localhost \
    ORM_LOGGING=true \
    DEPLOYMENT_PLATFORM=docker:local \
    TERM=xterm

# Prepare DB and start application
ENTRYPOINT service postgresql start 1> /dev/null && bash /app/server/scripts/init-db-boot.sh